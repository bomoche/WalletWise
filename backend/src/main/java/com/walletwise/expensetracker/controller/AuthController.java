package com.walletwise.expensetracker.controller;

import com.walletwise.expensetracker.dto.AuthResponse;
import com.walletwise.expensetracker.dto.LoginRequest;
import com.walletwise.expensetracker.dto.RegisterRequest;
import com.walletwise.expensetracker.entity.User;
import com.walletwise.expensetracker.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterRequest request) {
        User createdUser = authService.register(
                request.getName(),
                request.getEmail(),
                request.getPassword()
        );
        return ResponseEntity.ok(createdUser);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        String token = authService.login(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(new AuthResponse(token));
    }

    
}