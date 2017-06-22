package controller;

import com.opensymphony.xwork2.ActionSupport;

import com.opensymphony.xwork2.ModelDriven;
import enties.Suggest;
import org.apache.struts2.interceptor.ServletResponseAware;
import service.SuggestService;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * @author 赵涛涛
 * @version 2017/2/22.
 */
public class SuggestAction extends ActionSupport implements ServletResponseAware,ModelDriven<Suggest>{
    private Suggest suggest;
    private SuggestService suggestService;


    private List<Suggest> suggests = new ArrayList<Suggest>();


    public Suggest getSuggest() {
        return suggest;
    }

    public void setSuggest(Suggest suggest) {
        this.suggest = suggest;
    }

    public SuggestService getSuggestService() {
        return suggestService;
    }

    public void setSuggestService(SuggestService suggestService) {
        this.suggestService = suggestService;
    }


    public String add()throws Exception{
        System.out.println("suggestd对象---->"+suggest.getSugName());
        suggestService.insertSuggest(suggest);

        return SUCCESS;
    }

    //查
    HttpServletResponse httpServletResponse;
    public void setServletResponse(HttpServletResponse httpServletResponse) {
        this.httpServletResponse=httpServletResponse;
    }
    public void queryAllSuggest(){
        //获取数据库所有纪录。
        suggests = suggestService.queryAllSuggest();
        new util.JsonUtil().printSuggest(suggests,httpServletResponse);
    }

    //删除
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }



    public void delete(){
        System.out.println("删除的id信息："+suggest.getId());
        suggestService.delete(suggest.getId());
    }

    public Suggest getModel() {
        suggest=new Suggest();
        return suggest;
    }

    //test,说明控制层没有问题。问题出现在dao层。
    public void test(){
        System.out.println("test");
    }
}
