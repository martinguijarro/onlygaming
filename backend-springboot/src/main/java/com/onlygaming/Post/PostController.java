package com.onlygaming.Post;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.onlygaming.Exception.ResourceNotFoundException;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PostController {
    
    @Autowired
    private PostService postService;

    // CRUD endpoints

    @GetMapping("/posts/all")
    public List<PostDTO> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/post/{postId}")
    public ResponseEntity<Post> getPostById(@PathVariable String postId) throws ResourceNotFoundException {
        return postService.getPostById(postId);
    }

    @PostMapping("/post/create")
    public Post createPost(@Valid @RequestBody Post post) {
        return postService.createPost(post);
    }

    @PutMapping("/user/{postId}/edit")
    public ResponseEntity<Post> updatePost(@PathVariable String postId, @Valid @RequestBody Post postDetails) throws ResourceNotFoundException {
        return postService.updatePost(postId, postDetails);
    }

    @DeleteMapping("/user/{postId}/delete")
    public Map<String, Boolean> deletePost(@PathVariable String postId) throws ResourceNotFoundException {
        return postService.deletePost(postId);
    }

    // Custom endpoints

    @PostMapping("/post/{postId}/like")
    public ResponseEntity<Post> likePost(@PathVariable String postId, @RequestBody String username) throws ResourceNotFoundException {
        return postService.likePost(postId, username);
    }

    @PostMapping("/post/{postId}/unlike")
    public ResponseEntity<Post> unlikePost(@PathVariable String postId, @RequestBody String username) throws ResourceNotFoundException {
        return postService.unlikePost(postId, username);
    }
    
}
