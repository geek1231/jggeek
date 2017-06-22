package dao;

import enties.ProductionInfo;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.util.List;

/**
 * @author 赵涛涛
 * @version 2017/2/21.
 */
public class ProductionInfoDao {

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
     * 添加作品
     * @param productionInfo
     */
    public void add(ProductionInfo productionInfo){
//        String name = productionInfo.getProName();
//        String hql = "from ProductionInfo p where p.proName=?1";
//        Query query = getSession().createQuery(hql).setParameter("1",name);
//        if(query.list().size()!=0){
//            System.out.println("作品信息插入异常，数据库已存在"+name+"的记录");
//            throw new RuntimeException("插入异常，数据库已存在此记录！");
//        }
        getSession().save(productionInfo);
    }

    /**
     * 删除作品
     * @param id
     */
    public void delete(int id){
        if(id<=0){
            System.out.println("删除异常，id号输入有误！");
            throw new RuntimeException("删除异常，id号输入有误！");
        }
        ProductionInfo productionInfo = new ProductionInfo();
        productionInfo.setId(id);
        getSession().delete(productionInfo);
    }

    /**
     * 查询所有作品
     * @return
     */
    public List<ProductionInfo> queryAllProductionInfo(){
        String hql = "from ProductionInfo";
        Query query = getSession().createQuery(hql);
        List<ProductionInfo> list = query.list();
        return list;
    }

    public void update(){

    }

}
