import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ConfirmationTokenService {

    private final ConfirmationTokenRepository confirmationTokenRepositories;

    public ConfirmationTokenService(ConfirmationTokenRepository confirmationTokenRepositories) {
        this.confirmationTokenRepositories = confirmationTokenRepositories;
    }


    public void saveConfirmationToken(ConfirmationToken confirmationToken) {
        confirmationTokenRepositories.save(confirmationToken);
    }
    public void deleteConfirmationToken(Long id){
        confirmationTokenRepositories.deleteById(id);
    }
    public Optional<ConfirmationToken> findConfirmationToken(String token){
        return confirmationTokenRepositories.findBy(token);
    }

}
