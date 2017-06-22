package service;

import dao.StudyCenterDao;
import enties.StudyCenter;

import java.util.List;


/**
 * Created by I am master on 2017/2/22.
 */
public class StudyCenterServiceImpl implements StudyCenterService {
    private StudyCenterDao studyCenterDao;

    public StudyCenterDao getStudyCenterDao() {
        return studyCenterDao;
    }

    public void setStudyCenterDao(StudyCenterDao studyCenterDao) {
        this.studyCenterDao = studyCenterDao;
    }

    @Override
    public int insertStudy(StudyCenter studyCenter) {
        studyCenterDao.add(studyCenter);
        return 0;
    }

    @Override
    public void delete(int id) {
        studyCenterDao.delete(id);
    }

    @Override
    public List<StudyCenter> queryAllStudyCenter() {
        return studyCenterDao.queryAllStudyCenter();
    }
}
