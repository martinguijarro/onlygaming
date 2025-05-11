package com.onlygaming.Reply;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.onlygaming.Exception.ResourceNotFoundException;

@Service
public class ReplyService {
    
    @Autowired
    private ReplyRepository replyRepository;

    // CRUD methods

    public List<Reply> getAllReplies() {
        return replyRepository.findAll();
    }

    public ResponseEntity<Reply> getReplyById(String replyId) throws ResourceNotFoundException {
        Reply reply = replyRepository.findById(replyId)
            .orElseThrow(() -> new ResourceNotFoundException("Reply with id " + replyId + " not found"));

        return ResponseEntity.ok().body(reply);
    }

    public Reply createReply(Reply reply) {
        return replyRepository.save(reply);
    }

    public ResponseEntity<Reply> updateReply(String replyId, Reply replyDetails) throws ResourceNotFoundException {
        Reply reply = replyRepository.findById(replyId)
            .orElseThrow(() -> new ResourceNotFoundException("Reply with id " + replyId + " not found"));

        reply.setText(replyDetails.getText());
        reply.setUserId(replyDetails.getUserId());

        final Reply updatedReply = replyRepository.save(reply);
        return ResponseEntity.ok(updatedReply);
    }

    public Map<String, Boolean> deleteReply(String replyId) throws ResourceNotFoundException {
        Reply reply = replyRepository.findById(replyId)
            .orElseThrow(() -> new ResourceNotFoundException("Reply with id " + replyId + " not found"));
        replyRepository.delete(reply);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Reply deleted", Boolean.TRUE);
        return response;
    }

    // Other methods

}
