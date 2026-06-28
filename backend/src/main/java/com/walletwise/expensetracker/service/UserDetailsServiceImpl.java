package com.walletwise.expensetracker.service;

import com.walletwise.expensetracker.entity.User;
import com.walletwise.expensetracker.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.List;

// Spring Security doesn't know about OUR User entity. This class translates
// "find a user by email" (something we already built in UserRepository)
// into the exact shape Spring Security's machinery expects to work with.
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));

        // Spring Security's UserDetails wants: username, password, and a list
        // of "authorities" (roles/permissions). We don't have roles yet, so
        // we hand back an empty list - everyone is just "authenticated", no
        // special permission tiers for now.
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                List.<SimpleGrantedAuthority>of()
        );
    }
}