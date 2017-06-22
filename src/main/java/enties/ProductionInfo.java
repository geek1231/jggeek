package enties;

import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Min;
import java.io.File;

/**
 * @author 赵涛涛
 * @version 2017/2/21.
 */
public class ProductionInfo {
    @Min(1)
    private Integer id;
    @NotEmpty
    private String proName;

    public File getProImg() {
        return proImg;
    }

    public void setProImg(File proImg) {
        this.proImg = proImg;
    }

    private String proImgUrl;
    private String proInfo;
    private File proImg;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProName() {
        return proName;
    }

    public void setProName(String proName) {
        this.proName = proName;
    }

    public String getProImgUrl() {
        return proImgUrl;
    }

    public void setProImgUrl(String proImgUrl) {
        this.proImgUrl = proImgUrl;
    }

    public String getProInfo() {
        return proInfo;
    }

    public void setProInfo(String proInfo) {
        this.proInfo = proInfo;
    }
}
