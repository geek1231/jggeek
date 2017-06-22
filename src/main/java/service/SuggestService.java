package service;


import enties.Suggest;

import java.util.List;

/**
 * Created by ASUS on 2017/2/22.
 */
public interface SuggestService {
     int insertSuggest(Suggest suggest);
     void delete(int id);
     List<Suggest> queryAllSuggest();
}
