package dao;

import enties.StudyCenter;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.annotations.LazyCollection;

import java.util.List;

/**
 * @author 赵涛涛
 * @version 2017/2/21.
 */
public class StudyCenterDao {
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
     * 添加学习中心
     * @param studyCenter
     */
    public void add(StudyCenter studyCenter){
        getSession().save(studyCenter);
    }

    /**
     * 删除学习中心
     * @param id
     */
    public void delete(int id){
        if(id<=0){
            System.out.println("删除异常，id号输入有误！");
            throw new RuntimeException("删除异常，id号输入有误！");
        }
        StudyCenter studyCenter = new StudyCenter();
        studyCenter.setId(id);
        getSession().delete(studyCenter);
    }

    /**
     * 查询所有学习中心
     * @return
     */
    public List<StudyCenter> queryAllStudyCenter(){
        String hql = "from StudyCenter";
        Query query = getSession().createQuery(hql);
        List<StudyCenter> list = query.list();
        return list;
    }

    public void update(){

    }
}
