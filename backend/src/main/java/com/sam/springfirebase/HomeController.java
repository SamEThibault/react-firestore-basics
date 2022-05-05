package com.sam.springfirebase;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController
{
    // default browser page returns index.html
    @RequestMapping(value = "/")
    public String index()
    {
        return "index";
    }
}
