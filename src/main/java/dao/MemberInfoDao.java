package dao;

import enties.MemberInfo;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.util.List;

/**
 * @author 赵涛涛
 * @version 2017/2/21.
 */
public class MemberInfoDao {
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
     * 添加成员信息
     * @param memberInfo
     */
    public void add(MemberInfo memberInfo){
        String name = memberInfo.getPersonName();
        String hql = "from MemberInfo m where m.personName=?1";
        Query query = getSession().createQuery(hql).setParameter("1",name);
        if(query.list().size()!=0){
            System.out.println("成员信息插入异常，数据库已存在"+name+"的记录");
            throw new RuntimeException("插入异常，数据库已存在此记录！");
        }
        getSession().save(memberInfo);
    }

    /**
     * 删除成员信息
     * @param id
     */
    public void delete(int id){
        if(id<=0){
            System.out.println("删除异常，id号输入有误！");
            throw new RuntimeException("删除异常，id号输入有误！");
        }
        MemberInfo memberInfo = new MemberInfo();
        memberInfo.setId(id);
        getSession().delete(memberInfo);

    }

    /**
     * 查询所有成员信息
     * 根据字段posion分组
     * @return
     */
    public List<MemberInfo> queryAllMemberInfo(){
        //不能用group by
        String hql = "from MemberInfo m where m.position = ?";
        Query query = getSession().createQuery(hql).setParameter(0,"前端");
        List<MemberInfo> list = query.list();

        Query query1 = getSession().createQuery(hql).setParameter(0,"后台");
        List<MemberInfo> list1 = query1.list();

        Query query2 = getSession().createQuery(hql).setParameter(0,"无");
        List<MemberInfo> list2 = query2.list();
        //前端，后台.老师
        list.addAll(list1);
        list.addAll(list2);

        return list;
    }

    public void update(){

    }
}
