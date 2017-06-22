package service;

import dao.MemberInfoDao;
import enties.MemberInfo;
import org.hibernate.Query;

import java.util.List;

/**
 * Created by I am master on 2017/2/22.
 */
public class MemberInfoServiceImpl implements MemberInfoService {
    MemberInfoDao memberInfoDao;

    public MemberInfoDao getMemberInfoDao() {
        return memberInfoDao;
    }

    public void setMemberInfoDao(MemberInfoDao memberInfoDao) {
        this.memberInfoDao = memberInfoDao;
    }


    @Override
    public int insertMember(MemberInfo memberInfo) {
        memberInfoDao.add(memberInfo);
        return 0;
    }

    public List<MemberInfo> queryAllMemberInfo(){
        return memberInfoDao.queryAllMemberInfo();
    }

    //删除成员
    public void delete(int id){
        memberInfoDao.delete(id);
    }
}
