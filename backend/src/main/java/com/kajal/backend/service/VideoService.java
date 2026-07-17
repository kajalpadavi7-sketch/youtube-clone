package com.kajal.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.kajal.backend.repository.VideoRepository;

import java.io.File;
import java.io.IOException;

@Service
public class VideoService {


    @Autowired
    private VideoRepository videoRepository;


    
    @Value("${file.upload.video}")
    private String videoFolder;


    @Value("${file.upload.thumbnail}")
    private String thumbnailFolder;



    public String uploadVideo(
            String title,
            String description,
            MultipartFile video,
            MultipartFile thumbnail) throws IOException {


        // Create folder if not exists
        new File(videoFolder).mkdirs();
        new File(thumbnailFolder).mkdirs();


        String videoPath = videoFolder + video.getOriginalFilename();

        String thumbnailPath = thumbnailFolder + thumbnail.getOriginalFilename();


        video.transferTo(new File(videoPath));

        thumbnail.transferTo(new File(thumbnailPath));


        System.out.println("Video Saved At : " + videoPath);
        System.out.println("Thumbnail Saved At : " + thumbnailPath);


        return "Files Saved Successfully";
    }

}