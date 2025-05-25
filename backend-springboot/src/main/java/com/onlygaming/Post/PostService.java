package com.onlygaming.Post;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.onlygaming.Exception.ResourceNotFoundException;

@Service
public class PostService {
    
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    // CRUD methods

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public ResponseEntity<Post> getPostById(String postId) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post with id " + postId + " not found"));

        return ResponseEntity.ok().body(post);
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public ResponseEntity<Post> updatePost(String postId, Post postDetails) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post with id " + postId + " not found"));

        post.setText(postDetails.getText());
        post.setGameId(postDetails.getGameId());
        post.setUserId(postDetails.getUserId());

        final Post updatedPost = postRepository.save(post);
        return ResponseEntity.ok(updatedPost);
    }

    public Map<String, Boolean> deletePost(String postId) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post with id " + postId + " not found"));
        postRepository.delete(post);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Post deleted", Boolean.TRUE);
        return response;
    }

    // Other methods

}
