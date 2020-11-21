import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CompanyController
{
    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping("/comps")
    public List<Company> getAll() {
        return companyRepository.findAll();
    }
}
