package controller;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import enties.ProductionInfo;

import org.apache.struts2.interceptor.ServletResponseAware;
import service.ProductionInfoService;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.List;

/**
 * Created by I am master on 2017/2/22.
 */
public class ProductionAction extends ActionSupport implements ServletResponseAware,ModelDriven<ProductionInfo>{
    //������Ϣ�Ķ���
    private ProductionInfo productionInfo;
    private ProductionInfoService productionInfoService;


    private String proImgFileName;
    private String proImgContentType;
    //ͼƬ��ַ
    private String proImgUrl;

    public String getProImgUrl() {
        return proImgUrl;
    }

    public void setProImgUrl(String proImgUrl) {
        this.proImgUrl = proImgUrl;
    }

    public List<ProductionInfo> getProductionInfos() {
        return productionInfos;
    }

    public void setProductionInfos(List<ProductionInfo> productionInfos) {
        this.productionInfos = productionInfos;
    }

    private List<ProductionInfo>productionInfos;

    public ProductionInfo getProductionInfo() {
        return productionInfo;
    }

    public void setProductionInfo(ProductionInfo productionInfo) {
        this.productionInfo = productionInfo;
    }

    public ProductionInfoService getProductionInfoService() {
        return productionInfoService;
    }

    public void setProductionInfoService(ProductionInfoService productionInfoService) {
        this.productionInfoService = productionInfoService;
    }



    public String getProImgFileName() {
        return proImgFileName;
    }

    public void setProImgFileName(String proImgFileName) {
        this.proImgFileName = proImgFileName;
    }

    public String getProImgContentType() {
        return proImgContentType;
    }

    public void setProImgContentType(String proImgContentType) {
        this.proImgContentType = proImgContentType;
    }



    public String add() throws Exception{

        FileOutputStream fileOutputStream=new FileOutputStream("F:\\IJJavaProject\\geekz\\web\\images\\"+getProImgFileName());
        FileInputStream fileInputStream=new FileInputStream(productionInfo.getProImg());
        byte[] buffer=new byte[1024];
        int len=0;
        while ((len=fileInputStream.read(buffer))>0){
            fileOutputStream.write(buffer,0,len);
        }
        proImgUrl="/images"+getProImgFileName();
        productionInfo.setProImgUrl(proImgUrl);
        productionInfoService.insertProduct(productionInfo);
        return SUCCESS;
    }
    HttpServletResponse httpServletResponse;
    @Override
    public void setServletResponse(HttpServletResponse httpServletResponse) {
        this.httpServletResponse=httpServletResponse;
    }


    public String queryAllProductionInfo(){
        productionInfos=productionInfoService.queryAllProductionInfo();
        new util.JsonUtil().printProduction(productionInfos,httpServletResponse);
        return null;
    }


    public void delete(){
        System.out.println("删除的id信息"+productionInfo.getId());
        productionInfoService.delete(productionInfo.getId());
    }

    @Override
    public ProductionInfo getModel() {
        productionInfo=new ProductionInfo();
        return productionInfo;
    }
}
