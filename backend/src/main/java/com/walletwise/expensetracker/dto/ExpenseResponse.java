package com.walletwise.expensetracker.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

// We send THIS back to the frontend, never the raw Expense entity directly -
// same reasoning as why AuthResponse only contains a token, not the whole User.
// This also means: even if Expense later gets new internal-only fields,
// the frontend's contract doesn't silently change underneath it.
@Data
@AllArgsConstructor
public class ExpenseResponse {
    private Long id;
    private String title;
    private BigDecimal amount;
    private String category;
    private LocalDate date;
    private String notes;
}