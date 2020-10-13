package com.TeamL.demo.User.ConfirmationToken;

import com.TeamL.demo.User.ConfirmationToken.ConfirmationToken;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConfirmationTokenRepository extends CrudRepository<ConfirmationToken, Long> {
    Optional<ConfirmationToken> findConfirmationToken(String token);

}
