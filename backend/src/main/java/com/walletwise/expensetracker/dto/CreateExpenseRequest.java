package com.walletwise.expensetracker.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class CreateExpenseRequest {
    private String title;
    private BigDecimal amount;
    private String category;
    private LocalDate date;
    private String notes;
}