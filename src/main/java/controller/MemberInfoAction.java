package controller;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import enties.MemberInfo;
import org.apache.struts2.interceptor.ServletResponseAware;
import service.MemberInfoService;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.List;

/**
 * Created by I am master on 2017/2/22.
 */
public class MemberInfoAction extends ActionSupport implements ServletResponseAware,ModelDriven<MemberInfo>{
    private MemberInfo memberInfo;
    private MemberInfoService memberInfoService;

    private String personImgFileName;
    private String personImgContentType;
    private List<MemberInfo> memberInfos;



    public List<MemberInfo> getMemberInfos() {
        return memberInfos;
    }
    public void setMemberInfos(List<MemberInfo> memberInfos) {
        this.memberInfos = memberInfos;
    }


    public MemberInfo getMemberInfo() {
        return memberInfo;
    }

    public void setMemberInfo(MemberInfo memberInfo) {
        this.memberInfo = memberInfo;
    }

    public MemberInfoService getMemberInfoService() {
        return memberInfoService;
    }

    public void setMemberInfoService(MemberInfoService memberInfoService) {
        this.memberInfoService = memberInfoService;
    }



    public String getPersonImgFileName() {
        return personImgFileName;
    }

    public void setPersonImgFileName(String personImgFileName) {
        this.personImgFileName = personImgFileName;
    }

    public String getPersonImgContentType() {
        return personImgContentType;
    }

    public void setPersonImgContentType(String personImgContentType) {
        this.personImgContentType = personImgContentType;
    }


    public String add() throws Exception{
        FileOutputStream fileOutputStream=new FileOutputStream("F:\\IJJavaProject\\geekz\\src\\main\\webapp\\images\\"+getPersonImgFileName());
        FileInputStream fileInputStream=new FileInputStream(memberInfo.getPersonImg());

        byte[] buffer=new byte[1024];
        int len=0;
        while ((len=fileInputStream.read(buffer))>0){
            fileOutputStream.write(buffer,0,len);
        }
        /**/
        String personImgUrl="/images"+getPersonImgFileName();
        memberInfo.setPersonImgUrl(personImgUrl);
        memberInfoService.insertMember(memberInfo);
        return SUCCESS;
    }

    HttpServletResponse response;
    public void setServletResponse(HttpServletResponse httpServletResponse) {
        this.response=httpServletResponse;
    }
    public String queryAllMemberInfo(){
//        System.out.println(memberInfoService.queryAllMemberInfo());
        //获取数据库对应表的所有纪录。
        memberInfos = getMemberInfoService().queryAllMemberInfo();
        new util.JsonUtil().printMemberInfo(memberInfos,response);
        return null;
    }


    public void delete(){
        System.out.println("删除的id信息"+memberInfo.getId());
        memberInfoService.delete(memberInfo.getId());
    }


    public MemberInfo getModel() {
        //发送的所有参数封装在memberInfo里
        memberInfo=new MemberInfo();
        return memberInfo;
    }
}
