import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;

@RestController
@CrossOrigin(origins = "http//localhost:3000")
public class UserController {
    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> userID(@PathVariable String id){
        return userService.getUser(id);
    }

    @GetMapping("/users")
    public Collection<User> getUsers(){
        return userService.findAll();
    }

    @PostMapping(value = "/sign-up")
    public String signUpUser(@RequestBody User user) {
        if(userService.loadUserByUsername(user.getEmail()) == null){
            userService.signUp(user);
            return "redirect:/sign-in";
        }
        else{
           return "User email is already in use";
        }
    }

    @GetMapping("/sign-in")
    public String signIn(@RequestParam String email, @RequestParam String password){
        User user = userService.loadUserByUsername(email);
        if (user == null)
        {
            return "not today hacker man";
        }
        else if(user.getUsername().equals(email) && userService.passEncoder(password, user.getPassword())){
            return user.getId();
        }
        else{
            return "User not found: " + email;
        }
    }

    @GetMapping("/sign-up")
    public String signUpUser() {

        return "sign-up";
    }
//      Method to be implemented
//    @GetMapping("/sign-up/confirm")
//    String confirmMail(@RequestParam("token") String token) {
//
//        Optional<teaml.ConfirmationToken> optionalConfirmationToken = confirmationTokenService.findConfirmationToken(token);
//
//        optionalConfirmationToken.ifPresent(userService::confirmUser);
//
//        return "sign-in";
//    }
}