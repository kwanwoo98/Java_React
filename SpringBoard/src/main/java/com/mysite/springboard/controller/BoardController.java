package com.mysite.springboard.controller;

import com.mysite.springboard.entity.Board;
import com.mysite.springboard.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @PostMapping("/addboard")
    public Board addBoard(@RequestBody Board newBoard) {
        return boardService.addBoard(newBoard);
    }

    @GetMapping("/boards")
    public List<Board> getAllBoards() {
        return boardService.getAllBoards();
    }

    @GetMapping("/board/{bno}")
    public Board getBoardById(@PathVariable Long bno) {
        boardService.addHit(bno);
        return boardService.getBoardById(bno).orElse(null);
    }

    @GetMapping("/board/{bno}/addhit")
    public Board addHit(@PathVariable Long bno) {
        Board board = boardService.addHit(bno);
        return boardService.addHit(bno);
    }

    @PutMapping("/board/{bno}")
    public void updateBoard(@RequestBody Board updateBoard, @PathVariable Long bno) {
        boardService.updateBoard(bno, updateBoard);
    }

    @DeleteMapping("/board/{bno}")
    public String deleteBoard(@PathVariable Long bno) {
        return boardService.deleteBoard(bno);
    }
}
