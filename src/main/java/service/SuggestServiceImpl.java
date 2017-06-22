package service;


import dao.SuggestDao;
import enties.Suggest;

import java.util.List;

/**
 * Created by I am master on 2017/2/22.
 */
public class SuggestServiceImpl implements SuggestService {
    SuggestDao suggestDao;


    public SuggestDao getSuggestDao() {
        return suggestDao;
    }

    public void setSuggestDao(SuggestDao suggestDao) {
        this.suggestDao = suggestDao;
    }

    @Override
    public int insertSuggest(Suggest suggest) {
        suggestDao.add(suggest);
        return 0;
    }

    @Override
    public void delete(int id) {
        suggestDao.delete(id);
    }

    @Override
    public List<Suggest> queryAllSuggest() {
        return suggestDao.queryAllSuggest();
    }
}
