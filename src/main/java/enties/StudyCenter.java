package enties;

import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Min;
import java.io.File;

/**
 * @author 赵涛涛
 * @version 2017/2/21.
 */
public class StudyCenter {
    @Min(1)
    private Integer id;
    @NotEmpty
    private String stuKind;
    @NotEmpty
    private String stuName;
    private String stuImgUrl;
    private String stuIntr;
    private String stuReco;
    //网址链接
    private String stuLink;
    private File stuImg;

    public File getStuImg() {
        return stuImg;
    }

    public void setStuImg(File stuImg) {
        this.stuImg = stuImg;
    }

    public StudyCenter() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStuKind() {
        return stuKind;
    }

    public void setStuKind(String stuKind) {
        this.stuKind = stuKind;
    }

    public String getStuName() {
        return stuName;
    }

    public void setStuName(String stuName) {
        this.stuName = stuName;
    }

    public String getStuImgUrl() {
        return stuImgUrl;
    }

    public void setStuImgUrl(String stuImgUrl) {
        this.stuImgUrl = stuImgUrl;
    }

    public String getStuIntr() {
        return stuIntr;
    }

    public void setStuIntr(String stuIntr) {
        this.stuIntr = stuIntr;
    }

    public String getStuReco() {
        return stuReco;
    }

    public void setStuReco(String stuReco) {
        this.stuReco = stuReco;
    }

    public String getStuLink() {
        return stuLink;
    }

    public void setStuLink(String stuLink) {
        this.stuLink = stuLink;
    }
}
