package enties;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;
import javax.validation.constraints.Min;



/**
 * @author 赵涛涛
 * @version 2017/2/21.
 */
public class ExcellentStar {
    @Min(1)
    private Integer id;
    @NotEmpty(message = "你忘记填写姓名了！")
    private String graName;
    @NotEmpty
    @Length(min = 4,max = 4,message = "您必须输入四位数的年级！")
    private String graGrade;    //年级
    private String graPosion;    //学习方向
    private String graPlace;   //毕业去向

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGraName() {
        return graName;
    }

    public void setGraName(String graName) {
        this.graName = graName;
    }

    public String getGraGrade() {
        return graGrade;
    }

    public void setGraGrade(String graGrade) {
        this.graGrade = graGrade;
    }

    public String getGraPosion() {
        return graPosion;
    }

    public void setGraPosion(String graPosion) {
        this.graPosion = graPosion;
    }

    public String getGraPlace() {
        return graPlace;
    }

    public void setGraPlace(String graPlace) {
        this.graPlace = graPlace;
    }

    @Override
    public String toString() {
        return "ExcellentStar{" +
                "id=" + id +
                ", graName='" + graName + '\'' +
                ", graGrade='" + graGrade + '\'' +
                ", graPosion='" + graPosion + '\'' +
                ", graPlace='" + graPlace + '\'' +
                '}';
    }
}
