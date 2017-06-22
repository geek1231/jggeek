package service;

import enties.ExcellentStar;

import java.util.List;


/**
 * Created by ASUS on 2017/2/22.
 */
public interface ExcellentStarService {
     int insertStar(ExcellentStar excellentStar);
     void delete(int id);
     List<ExcellentStar> queryAllExcellentStar();
}
