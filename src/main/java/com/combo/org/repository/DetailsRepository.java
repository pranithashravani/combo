package com.combo.org.repository;

import com.combo.org.domain.Details;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.nio.channels.FileChannel;
import java.util.stream.LongStream;

public interface DetailsRepository extends MongoRepository<Details,Integer> {

}
