package com.geronimo.don.rest;

import com.geronimo.don.dataAccess.MasterRepository;
import com.geronimo.don.entities.Master;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

/**
 *
 * @author luciano
 */
@RestController
public class MasterRestController {
    @Autowired
    private MasterRepository masterRepo;
    
    @RequestMapping(path="/app/master", method=GET)
    public Iterable<Master> findAll(){
        Iterable<Master> lst = masterRepo.findAll();
        return lst;
    }
    @RequestMapping(path="/app/teste", method = GET)
    public List<Object> list() {
        return null;
    }
    
/*    @RequestMapping(value = "/{id}", method = GET)
    public Object get(@PathVariable String id) {
        return null;
    }
    
    @RequestMapping(value = "/{id}", method = PUT)
    public ResponseEntity<?> put(@PathVariable String id, @RequestBody Object input) {
        return null;
    }
    
    @RequestMapping(value = "/{id}", method = POST)
    public ResponseEntity<?> post(@PathVariable String id, @RequestBody Object input) {
        return null;
    }
    
    @RequestMapping(value = "/{id}", method = DELETE)
    public ResponseEntity<Object> delete(@PathVariable String id) {
        return null;
    }
 */   
}
