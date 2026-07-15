package com.learning.Smart_Contact_Manager.jwt;
import java.lang.String;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private long expiration;

    private SecretKey getSigningKey() {

        byte[] keyBytes = Decoders.BASE64.decode(secret);

        return Keys.hmacShaKeyFor(keyBytes);

    }

    //Generate Token.....

    public String generateToken(String email){

        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())

                .expiration(new Date(System.currentTimeMillis()+expiration))

                .signWith(getSigningKey())

                .compact();

    }

    //Extract username ....
    public String extractUsername(String token){

        Claims claims = Jwts.parser()

                .verifyWith(getSigningKey())

                .build()

                .parseSignedClaims(token)

                .getPayload();

        return claims.getSubject();

    }

    //check expiry....
    public boolean isTokenValid(String token, UserDetails userDetails){

        Claims claims = Jwts.parser()

                .verifyWith(getSigningKey())

                .build()

                .parseSignedClaims(token)

                .getPayload();

        return claims.getExpiration().after(new Date());

    }


}
