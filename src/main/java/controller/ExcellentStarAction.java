package controller;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import enties.ExcellentStar;

import org.apache.struts2.interceptor.ServletResponseAware;
import service.ExcellentStarService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * @author 赵涛涛
 * @version 2017/2/22.
 */
public class ExcellentStarAction extends ActionSupport
        implements ServletResponseAware,ModelDriven<ExcellentStar>{
    private ExcellentStar excellentStar;
    private ExcellentStarService excellentStarService;

    private List<ExcellentStar>excellentStars;

    public List<ExcellentStar> getExcellentStars() {
        return excellentStars;
    }

    public void setExcellentStars(List<ExcellentStar> excellentStars) {
        this.excellentStars = excellentStars;
    }

    public ExcellentStar getExcellentStar() {
        return excellentStar;
    }

    public void setExcellentStar(ExcellentStar excellentStar) {
        this.excellentStar = excellentStar;
    }

    public ExcellentStarService getExcellentStarService() {
        return excellentStarService;
    }

    public void setExcellentStarService(ExcellentStarService excellentStarService) {
        this.excellentStarService = excellentStarService;
    }

    /**
     *
     * @return
     * @throws Exception
     */
    public String add() throws Exception{
        System.out.println(excellentStar);
        excellentStarService.insertStar(excellentStar);
        return SUCCESS;
    }

    /**
     *
     */
    HttpServletResponse httpServletResponse;
    public void setServletResponse(HttpServletResponse httpServletResponse) {
        this.httpServletResponse=httpServletResponse;
    }

    /**
     *
     * @return
     */
    public String queryAllExcellentStar(){
        //获得数据库中所有ExcellentStar信息
        excellentStars=excellentStarService.queryAllExcellentStar();
        new util.JsonUtil().printExcellentStar(excellentStars,httpServletResponse);
        return null;
    }


    /**
     *
     */
    public void delete(){
        System.out.println("删除的id信息"+excellentStar.getId());
        excellentStarService.delete(excellentStar.getId());

    }

    /**
     *
     * @return
     */
    public ExcellentStar getModel() {
        excellentStar=new ExcellentStar();
        return excellentStar;
    }
}
