package com.onlygaming.Reply;

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
public class ReplyController {
    
    @Autowired
    private ReplyService replyService;

    // CRUD endpoints

    @GetMapping("/replies/all")
    public List<Reply> getAllReplies() {
        return replyService.getAllReplies();
    }

    @GetMapping("/reply/{replyId}")
    public ResponseEntity<Reply> getReplyById(@PathVariable String replyId) throws ResourceNotFoundException {
        return replyService.getReplyById(replyId);
    }

    @PostMapping("/reply/create")
    public Reply createReply(@Valid @RequestBody Reply reply) {
        return replyService.createReply(reply);
    }

    @PutMapping("/reply/{replyId}/edit")
    public ResponseEntity<Reply> updateReply(@PathVariable String replyId, @Valid @RequestBody Reply replyDetails) throws ResourceNotFoundException {
        return replyService.updateReply(replyId, replyDetails);
    }

    @DeleteMapping("/reply/{replyId}/delete")
    public Map<String, Boolean> deleteReply(@PathVariable String replyId) throws ResourceNotFoundException {
        return replyService.deleteReply(replyId);
    }

    // Other endpoints

}
