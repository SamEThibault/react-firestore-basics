package com.sam.springfirebase;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// maps default index.html screen
@Controller
public class HomeController
{
    @RequestMapping(value = "/")
    public String index()
    {
        return "index";
    }
}
