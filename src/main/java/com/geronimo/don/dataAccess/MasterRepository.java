/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.geronimo.don.dataAccess;

import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author luciano
 */
public interface MasterRepository extends CrudRepository<com.geronimo.don.entities.Master, Integer> {
    
}
