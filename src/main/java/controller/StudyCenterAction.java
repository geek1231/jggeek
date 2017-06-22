package controller;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import enties.StudyCenter;

import org.apache.struts2.interceptor.ServletResponseAware;
import service.StudyCenterService;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.List;

/**
 * Created by I am master on 2017/2/22.
 */
public class StudyCenterAction extends ActionSupport implements ServletResponseAware,ModelDriven<StudyCenter>{

    private StudyCenter studyCenter;
    private StudyCenterService studyCenterService;

    private String stuImgFileName;
    private String stuImgContentType;
    private String stuImgUrl;

    private List<StudyCenter>studyCenters;

    public List<StudyCenter> getStudyCenters() {
        return studyCenters;
    }

    public void setStudyCenters(List<StudyCenter> studyCenters) {
        this.studyCenters = studyCenters;
    }

    public StudyCenter getStudyCenter() {
        return studyCenter;
    }

    public void setStudyCenter(StudyCenter studyCenter) {
        this.studyCenter = studyCenter;
    }

    public StudyCenterService getStudyCenterService() {
        return studyCenterService;
    }

    public void setStudyCenterService(StudyCenterService studyCenterService) {
        this.studyCenterService = studyCenterService;
    }



    public String getStuImgFileName() {
        return stuImgFileName;
    }

    public void setStuImgFileName(String stuImgFileName) {
        this.stuImgFileName = stuImgFileName;
    }

    public String getStuImgContentType() {
        return stuImgContentType;
    }

    public void setStuImgContentType(String stuImgContentType) {
        this.stuImgContentType = stuImgContentType;
    }

    public String getStuImgUrl() {
        return stuImgUrl;
    }

    public void setStuImgUrl(String stuImgUrl) {
        this.stuImgUrl = stuImgUrl;
    }


    public String add()throws Exception{
        //FileOutputStream���ļ�д����
        FileOutputStream fileOutputStream=new FileOutputStream("F:\\IJJavaProject\\geekz\\web\\images\\"+getStuImgFileName());
        //FileInputStream���ļ��ж�ȡ��Ϣ
        FileInputStream fileInputStream=new FileInputStream(studyCenter.getStuImg());
        byte[] buffer=new byte[1024];
        int len=0;
        while ((len=fileInputStream.read(buffer))>0){
            fileOutputStream.write(buffer,0,len);
        }
        stuImgUrl="/images"+getStuImgFileName();
        studyCenter.setStuImgUrl(stuImgUrl);
        studyCenterService.insertStudy(studyCenter);

        return SUCCESS;
    }
    HttpServletResponse httpServletResponse;
    @Override
    public void setServletResponse(HttpServletResponse httpServletResponse) {
        this.httpServletResponse=httpServletResponse;
    }
    public String queryAllStudyCenter(){
        studyCenters=studyCenterService.queryAllStudyCenter();
        new util.JsonUtil().printStudyCenter(studyCenters,httpServletResponse);
        return null;
    }

    public void delete(){
        System.out.println("删除的id信息"+studyCenter.getId());
        studyCenterService.delete(studyCenter.getId());
    }

    @Override
    public StudyCenter getModel() {
        studyCenter=new StudyCenter();
        return studyCenter;
    }
}
