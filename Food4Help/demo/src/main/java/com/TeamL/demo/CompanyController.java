package com.TeamL.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/comps/searchByName")
    public Company searchByName(@RequestParam(name = "comp") String name) {
        return companyRepository.findByName(name)
                .orElseThrow(() -> new ResourceNotFoundException());

    }
}
