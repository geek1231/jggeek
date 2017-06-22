package enties;

import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Min;
import java.io.File;

/**
 * @author 赵涛涛
 * @version 2017/2/21.
 */
public class MemberInfo {
    @Min(1)
    private Integer id;
    @NotEmpty
    private String position;  //前端，后台
    private String personPosition;    //前端组长，后台组长
    @NotEmpty
    private String personName;
    @NotEmpty
    private String personInfo;
    private File personImg;
    private String personImgUrl;

    public void test(){
        System.out.println(123);
    }
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPersonPosition() {
        return personPosition;
    }

    public void setPersonPosition(String personPosition) {
        this.personPosition = personPosition;
    }

    public String getPersonName() {
        return personName;
    }

    public void setPersonName(String personName) {
        this.personName = personName;
    }

    public String getPersonInfo() {
        return personInfo;
    }

    public void setPersonInfo(String personInfo) {
        this.personInfo = personInfo;
    }

    public String getPersonImgUrl() {
        return personImgUrl;
    }

    public void setPersonImgUrl(String personImgUrl) {
        this.personImgUrl = personImgUrl;
    }

    public File getPersonImg() {
        return personImg;
    }

    public void setPersonImg(File personImg) {
        this.personImg = personImg;
    }

    @Override
    public String toString() {
        return "MemberInfo{" +
                "id=" + id +
                ", position='" + position + '\'' +
                ", personPosition='" + personPosition + '\'' +
                ", personName='" + personName + '\'' +
                ", personInfo='" + personInfo + '\'' +
                ", personImg=" + personImg +
                ", personImgUrl='" + personImgUrl + '\'' +
                '}';
    }
}
