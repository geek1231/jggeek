package enties;

import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Min;

/**
 * @author 赵涛涛
 * @version 2017/2/21.
 */
public class Suggest {
    @Min(1)
    private Integer id;
    @NotEmpty
    private String sugName;
    @NotEmpty
    private String sugEmail;
    private String sugPhone;
    @NotEmpty
    private String sugContent;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSugName() {
        return sugName;
    }

    public void setSugName(String sugName) {
        this.sugName = sugName;
    }

    public String getSugEmail() {
        return sugEmail;
    }

    public void setSugEmail(String sugEmail) {
        this.sugEmail = sugEmail;
    }

    public String getSugPhone() {
        return sugPhone;
    }

    public void setSugPhone(String sugPhone) {
        this.sugPhone = sugPhone;
    }

    public String getSugContent() {
        return sugContent;
    }

    public void setSugContent(String sugContent) {
        this.sugContent = sugContent;
    }


}

