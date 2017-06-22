package dao;

import enties.ExcellentStar;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.util.List;

/**
 * @author 赵涛涛
 * @version 2017/2/21.
 */
public class ExcellentStarDao {
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
     * 添加优秀之星
     * @param excellentStar
     */
    public void add(ExcellentStar excellentStar){
        //其它属性的验证由jsr框架完成
        String name = excellentStar.getGraName();
        String hql = "from ExcellentStar e where e.graName=?1";
        Query query = getSession().createQuery(hql).setParameter("1",name);
        if(query.list().size()!=0){
            System.out.println("优秀之星插入异常，数据库已存在"+name+"的记录");
            throw new RuntimeException("插入异常，数据库已存在此记录！");
        }
        getSession().save(excellentStar);
    }

    /**
     * 删除优秀之星
     * @param id
     */
    public void delete(int id){
        if(id<=0){
            System.out.println("删除异常，id号输入有误！");
            throw new RuntimeException("删除异常，id号输入有误！");
        }
        ExcellentStar excellentStar = new ExcellentStar();
        excellentStar.setId(id);
        getSession().delete(excellentStar);
    }

    /**
     *查询所有优秀之星
     * @return
     */
    public List<ExcellentStar> queryAllExcellentStar(){
        String hql = "from ExcellentStar";
        Query query = getSession().createQuery(hql);
        List<ExcellentStar> list = query.list();
        return list;
    }

    /**
     *
     */
    public void update(){

    }


}
