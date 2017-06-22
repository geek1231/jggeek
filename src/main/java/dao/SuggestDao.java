package dao;


import enties.Suggest;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.util.List;


/**
 * @author 赵涛涛
 * @version 2017/2/23.
 */
public class SuggestDao {
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public Session getSession(){
        return this.sessionFactory.getCurrentSession();
    }

    /**
     *添加一条反馈信息
     * @param suggest
     */
    public void add(Suggest suggest){
         getSession().save(suggest);
    }

    /**
     * 删除一条反馈信息
     * @param id
     */
    public void delete(int id){
        if(id<=0){
            System.out.println("删除异常，id号输入有误！");
            throw new RuntimeException("删除异常，id号输入有误！");
        }
        Suggest suggest = new Suggest();
        suggest.setId(id);
        getSession().delete(suggest);
    }

    /**
     * 查询所有反馈信息
     * @return
     */
    public List<Suggest> queryAllSuggest(){
        String hql = "from Suggest";
        Query query = getSession().createQuery(hql);
        List<Suggest>  list = query.list();
        return list;
    }

    public void update(){

    }
}
