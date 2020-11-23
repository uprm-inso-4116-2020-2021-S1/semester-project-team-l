package com.TeamL.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class FoodController
{
    @Autowired
    private FoodRepository foodRepository;

    @PostMapping("/food/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Food add(@RequestBody Food food)
    {
        return foodRepository.save(food);
    }

    @GetMapping("/food")
    public List<Food> getAll() {
        return foodRepository.findAll();
    }

    @GetMapping(value = "/food/{id}")
    public Food getOne(@PathVariable String id) {
        return foodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException());
    }

    @PutMapping(value = "/food/{id}")
    public Food update(@PathVariable String id, @RequestBody Food updatedFood) {
        Food food = foodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException());
        food.setName(updatedFood.getName());
        food.setType(updatedFood.getType());
        food.setAmount(updatedFood.getAmount());
        food.setSKU(updatedFood.getSKU());
        return foodRepository.save(food);
    }

    @DeleteMapping(value = "/food/{id}")
    @ResponseStatus(code = HttpStatus.ACCEPTED)
    public void delete(@PathVariable String id) {
        Food food = foodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException());
        foodRepository.delete(food);
    }

    @GetMapping("/food/searchByComp")
    public List<Food> searchByComp(@RequestParam(name = "comp") String comp) {
        List<Food> result = new ArrayList<>();
        result = foodRepository.findByCompany(comp);
        return result;
    }
}