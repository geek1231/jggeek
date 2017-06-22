package service;

import dao.ExcellentStarDao;
import enties.ExcellentStar;

import java.util.List;


/**
 * Created by I am master on 2017/2/22.
 */
public class ExcellentStarServiceImpl implements ExcellentStarService {
    ExcellentStarDao excellentStarDao;

    public ExcellentStarDao getExcellentStarDao() {
        return excellentStarDao;
    }

    public void setExcellentStarDao(ExcellentStarDao excellentStarDao) {
        this.excellentStarDao = excellentStarDao;
    }

    @Override
    public int insertStar(ExcellentStar excellentStar) {
        excellentStarDao.add(excellentStar);
        return 0;
    }

    @Override
    public void delete(int id) {
        excellentStarDao.delete(id);
    }

    @Override
    public List<ExcellentStar> queryAllExcellentStar() {
        return excellentStarDao.queryAllExcellentStar();
    }
}
