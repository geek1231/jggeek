package util;

import enties.*;
import net.sf.json.JSONArray;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * Created by ASUS on 2017/3/4.
 */
public class JsonUtil {

    /**
     *返回成员信息
     * @param memberInfos
     * @param httpServletResponse
     */
    public void printMemberInfo(List<MemberInfo> memberInfos,
                                HttpServletResponse httpServletResponse){
        JSONArray jsonArray = new JSONArray();
        //将集合转化为JSON数组
        jsonArray.addAll(memberInfos);
        //添加状态。字符串属性用的是单引号，添加到json数组，会自动转为双引号。
        String status = "{'status':'1'}";
        jsonArray.add(status);
        System.out.println("test:"+jsonArray.toString());

        httpServletResponse.setCharacterEncoding("utf-8");
        try {
            PrintWriter pw = httpServletResponse.getWriter();
            pw.print(jsonArray.toString());
        } catch (IOException e) {
            e.printStackTrace();

        }

    }


    /**
     *返回优秀之星
     * @param excellentStars
     * @param httpServletResponse
     */
    public void printExcellentStar(List<ExcellentStar> excellentStars,
                                   HttpServletResponse httpServletResponse){
        //将信息封装在json对象中
        JSONArray jsonArray=new JSONArray();
        jsonArray.addAll(excellentStars);
        //添加状态
        String status="{'status':'1'}";
        jsonArray.add(status);
        //将信息传给前端
        System.out.println("httpServletResponse"+httpServletResponse);
        httpServletResponse.setCharacterEncoding("utf-8");
        try{
            PrintWriter printWriter=httpServletResponse.getWriter();
            printWriter.print(jsonArray.toString());

        }catch (IOException e) {
            e.printStackTrace();
        }
    }


    /**
     *返回作品
     * @param productionInfos
     * @param httpServletResponse
     */
    public void printProduction(List<ProductionInfo> productionInfos,
                                HttpServletResponse httpServletResponse){
        JSONArray jsonArray=new JSONArray();
        jsonArray.addAll(productionInfos);
        String status="{'status':'1'}";
        jsonArray.add(status);
        httpServletResponse.setCharacterEncoding("utf-8");
        try{
            PrintWriter printWriter=httpServletResponse.getWriter();
            printWriter.write(jsonArray.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }

    }


    /**
     *学习中心
     * @param studyCenters
     * @param httpServletResponse
     */
    public void printStudyCenter(List<StudyCenter> studyCenters,
                                 HttpServletResponse httpServletResponse){
        JSONArray jsonArray=new JSONArray();
        jsonArray.addAll(studyCenters);
        String status="{'status':'1'}";
        jsonArray.add(status);
        httpServletResponse.setCharacterEncoding("utf-8");
        try{
            PrintWriter printWriter=httpServletResponse.getWriter();
            printWriter.print(jsonArray.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    /**
     *反馈建议
     * @param suggests
     * @param httpServletResponse
     */
    public void printSuggest(List<Suggest> suggests,
                             HttpServletResponse httpServletResponse){
        JSONArray jsonArray = new JSONArray();
        //为json数组赋值
        jsonArray.addAll(suggests);
        //添加状态
        String status = "{'status':'1'}";
        jsonArray.add(status);
//        System.out.println(jsonArray.toString());
        httpServletResponse.setCharacterEncoding("utf-8");

        try {
            PrintWriter pw = httpServletResponse.getWriter();
            pw.print(jsonArray.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }




}
