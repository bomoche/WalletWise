package com.walletwise.expensetracker.repository;

import com.walletwise.expensetracker.entity.Expense;
import com.walletwise.expensetracker.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    // Derived query: "find all expenses where the user matches this user"
    List<Expense> findByUser(User user);

    // Same idea, but filtering by the user's id directly instead of the
    // whole User object - sometimes more convenient depending on what
    // data we already have on hand in the Service layer.
    List<Expense> findByUserId(Long userId);
}