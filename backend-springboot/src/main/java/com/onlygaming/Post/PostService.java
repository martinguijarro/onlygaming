package com.onlygaming.Post;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.onlygaming.Exception.ResourceNotFoundException;
import com.onlygaming.Game.Game;
import com.onlygaming.Game.GameRepository;
import com.onlygaming.User.User;
import com.onlygaming.User.UserRepository;

@Service
public class PostService {
    
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final GameRepository gameRepository;

    public PostService(PostRepository postRepository, UserRepository userRepository, GameRepository gameRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.gameRepository = gameRepository;
    }

    // CRUD methods

    public List<PostDTO> getAllPosts() {
        List<Post> posts = postRepository.findAll();

        return posts.stream().map(post -> {
            User user = userRepository.findById(post.getUserId()).orElse(null);
            String userName = user != null ? user.getName() : "Desconocido";
            String userUsername = user != null ? user.getUsername() : "Desconocido";

            Game game = gameRepository.findById(post.getGameId()).orElse(null);
            String gameName = game != null ? game.getName() : "Desconocido";

            return new PostDTO(
                post.getPostId(),
                post.getText(),
                post.getDate(),
                post.getLikes(),
                post.getReports(),
                userName,
                userUsername,
                gameName
            );
        }).toList();
    }

    public ResponseEntity<Post> getPostById(String postId) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post with id " + postId + " not found"));

        return ResponseEntity.ok().body(post);
    }

    public Post createPost(Post post) {
        post.setLikes(new ArrayList<>());
        post.setReports(new ArrayList<>());
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

    public ResponseEntity<Post> likePost(String postId, String username) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post with id " + postId + " not found"));

        if (!post.getLikes().contains(username)) {
            post.getLikes().add(username);
            postRepository.save(post);
        }

        return ResponseEntity.ok(post);
    }

    public ResponseEntity<Post> unlikePost(String postId, String username) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post with id " + postId + " not found"));

        if (post.getLikes().contains(username)) {
            post.getLikes().remove(username);
            postRepository.save(post);
        }

        return ResponseEntity.ok(post);
    }

    public ResponseEntity<Post> reportPost(String postId, String username) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post with id " + postId + " not found"));

        if (!post.getReports().contains(username)) {
            post.getReports().add(username);
            postRepository.save(post);
        }

        return ResponseEntity.ok(post);
    }

    public ResponseEntity<Post> RemovereportPost(String postId, String username) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post with id " + postId + " not found"));

        if (post.getReports().contains(username)) {
            post.getReports().remove(username);
            postRepository.save(post);
        }

        return ResponseEntity.ok(post);
    }

    public ResponseEntity<Post> clearReports(@PathVariable String postId) throws ResourceNotFoundException {
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post with id " + postId + " not found"));

        post.getReports().clear();
        postRepository.save(post);

        return ResponseEntity.ok(post);
    }
}
