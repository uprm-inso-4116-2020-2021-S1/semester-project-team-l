package com.TeamL.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/food")
public class FoodController
{
    @Autowired
    private FoodRepository foodRepository;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Food add(@RequestBody Food food)
    {
        return foodRepository.save(food);
    }

    @GetMapping
    public List<Food> getAll() {
        return foodRepository.findAll();
    }
}