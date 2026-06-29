package com.walletwise.expensetracker.controller;

import com.walletwise.expensetracker.dto.CreateExpenseRequest;
import com.walletwise.expensetracker.dto.ExpenseResponse;
import com.walletwise.expensetracker.service.ExpenseService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping
    public ResponseEntity<ExpenseResponse> createExpense(
            @RequestBody CreateExpenseRequest request,
            Authentication authentication
    ) {
        return ResponseEntity.ok(expenseService.createExpense(authentication.getName(), request));
    }

    @GetMapping
    public ResponseEntity<List<ExpenseResponse>> getMyExpenses(Authentication authentication) {
        return ResponseEntity.ok(expenseService.getExpensesForUser(authentication.getName()));
    }

    // {id} in the path is a "path variable" - @PathVariable pulls it out
    // and hands it to us as a typed Long, no manual parsing needed.
    @PutMapping("/{id}")
    public ResponseEntity<ExpenseResponse> updateExpense(
            @PathVariable Long id,
            @RequestBody CreateExpenseRequest request,
            Authentication authentication
    ) {
        return ResponseEntity.ok(expenseService.updateExpense(authentication.getName(), id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExpense(
            @PathVariable Long id,
            Authentication authentication
    ) {
        expenseService.deleteExpense(authentication.getName(), id);
        return ResponseEntity.noContent().build(); // 204 No Content - standard for successful deletes
    }
}