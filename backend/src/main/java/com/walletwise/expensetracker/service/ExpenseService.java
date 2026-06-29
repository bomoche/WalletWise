package com.walletwise.expensetracker.service;

import com.walletwise.expensetracker.dto.CreateExpenseRequest;
import com.walletwise.expensetracker.dto.ExpenseResponse;
import com.walletwise.expensetracker.entity.Expense;
import com.walletwise.expensetracker.entity.User;
import com.walletwise.expensetracker.repository.ExpenseRepository;
import com.walletwise.expensetracker.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;

    public ExpenseService(ExpenseRepository expenseRepository, UserRepository userRepository) {
        this.expenseRepository = expenseRepository;
        this.userRepository = userRepository;
    }

    public ExpenseResponse createExpense(String userEmail, CreateExpenseRequest request) {
        User user = getUserOrThrow(userEmail);

        Expense expense = new Expense();
        expense.setTitle(request.getTitle());
        expense.setAmount(request.getAmount());
        expense.setCategory(request.getCategory());
        expense.setDate(request.getDate());
        expense.setNotes(request.getNotes());
        expense.setUser(user);

        return toResponse(expenseRepository.save(expense));
    }

    public List<ExpenseResponse> getExpensesForUser(String userEmail) {
        User user = getUserOrThrow(userEmail);

        return expenseRepository.findByUser(user)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public ExpenseResponse updateExpense(String userEmail, Long expenseId, CreateExpenseRequest request) {
        Expense expense = getOwnedExpenseOrThrow(userEmail, expenseId);

        expense.setTitle(request.getTitle());
        expense.setAmount(request.getAmount());
        expense.setCategory(request.getCategory());
        expense.setDate(request.getDate());
        expense.setNotes(request.getNotes());

        return toResponse(expenseRepository.save(expense));
    }

    public void deleteExpense(String userEmail, Long expenseId) {
        Expense expense = getOwnedExpenseOrThrow(userEmail, expenseId);
        expenseRepository.delete(expense);
    }

    // --- Private helpers ---

    private User getUserOrThrow(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // THE OWNERSHIP CHECK: fetch the expense, then explicitly compare its
    // owner's email against the email of whoever is making this request.
    // If they don't match, we throw - even though the expense DOES exist,
    // this specific user has no right to touch it.
    private Expense getOwnedExpenseOrThrow(String userEmail, Long expenseId) {
        Expense expense = expenseRepository.findById(expenseId)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        if (!expense.getUser().getEmail().equals(userEmail)) {
            throw new RuntimeException("You do not have permission to modify this expense");
        }

        return expense;
    }

    private ExpenseResponse toResponse(Expense expense) {
        return new ExpenseResponse(
                expense.getId(),
                expense.getTitle(),
                expense.getAmount(),
                expense.getCategory(),
                expense.getDate(),
                expense.getNotes()
        );
    }
}