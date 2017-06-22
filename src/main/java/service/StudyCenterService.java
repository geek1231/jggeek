package service;

import enties.StudyCenter;
import org.hibernate.Query;

import java.util.List;


/**
 * Created by ASUS on 2017/2/22.
 */
public interface StudyCenterService {
     int insertStudy(StudyCenter studyCenter);
     void delete(int id);
     List<StudyCenter> queryAllStudyCenter();
}
