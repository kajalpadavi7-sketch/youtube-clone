package com.kajal.backend.controller;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.kajal.backend.service.VideoService;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/videos")
@CrossOrigin(origins = "http://localhost:5173")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @GetMapping("/test")
    public String test() {
    return "Video Controller Working";
    }
    //@PostMapping("/upload")
    @PostMapping(value = "/upload", consumes = "multipart/form-data")
        public String uploadVideo(
        @RequestParam("title") String title,
        @RequestParam("description") String description,
        @RequestParam("video") MultipartFile video,
        @RequestParam("thumbnail") MultipartFile thumbnail) throws IOException{

    return videoService.uploadVideo(
        title,
        description,
        video,
        thumbnail
);
}
}
