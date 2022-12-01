package com.example.capstone.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CommonController {

    @GetMapping(value = "path")
    public String handleController(@RequestParam(value = "path_url", required = false) String path) {
        StringBuilder url = new StringBuilder();
        if (path == null || path.isEmpty()) {
            url.append("index");
        } else {
            String[] nameFd = path.split("/");
            String fd = nameFd[0];
            switch (fd) {
                case "teacher":
                    url.append("teacher/" + nameFd[1]);
                    break;
                case "subject":
                    url.append("subject/" + nameFd[1]);
                    break;
                case "student":
                    url.append("student/" + nameFd[1]);
                    break;
                case "admin":
                    url.append("administrator/" + nameFd[1]);
                    break;
                default:
                    url.append("administrator/" + nameFd[1]);
                    break;
            }
        }
        return url.toString();
    }
}
