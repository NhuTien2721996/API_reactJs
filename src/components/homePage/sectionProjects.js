import React, {useEffect, useState, Fragment} from "react";
import {BsModal, BsSlide, BsTab} from "../../bases/shared";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getAllProjectRequest} from "../../states/duck/pages/homePage/action";
import { getProjectRequestDetail} from "../../states/duck/pages/projectDetail/action";

const SectionProjects = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const projectDetail = useSelector(state => state.projectDetail);
    const dispatch = useDispatch();
    const onToggle = (value, id) => {
        setToggleModal(value);
        dispatch(getProjectRequestDetail(id));
    };
    return (
        <Fragment>
            <section className="section section-projects">
                <div className="bs-container">
                    <div className="bs-row">
                        <div className="bs-col">
                            <div className="module module-projects" data-aos="fade-up">
                                <div className="module-header">
                                    <p className="title">DỰ ÁN MỚI NHẤT</p>
                                </div>
                                <div className="module-content">
                                    <TabProjects
                                        onToggle={onToggle}
                                    />
                                </div>
                                <div className="text">
                                    <h1 className="title">
                                        PROJECTS
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BsModal
                toggleModal={toggleModal}
                onClick={() => setToggleModal(false)}
            >
                <div className="wrapper-content">
                    <div className="close__modal" onClick={()=>setToggleModal(false)}>
                        <span className="icon">X</span>
                    </div>
                    <div className="header">
                        <img src={`/images/${projectDetail.image}`} alt=""/>
                    </div>
                    <div className="content">
                        <div className="content-title">
                            <h3 className="title">
                                {projectDetail.title}
                            </h3>
                        </div>
                        <div className="content-detail">
                            <table className="table-info">
                                <tbody>
                                <tr>
                                    <th>Tên dự án</th>
                                    <td>:{projectDetail.name}</td>
                                </tr>
                                <tr>
                                    <th>Chủ đầu tư</th>
                                    <td>: Công ty Cổ phần Đầu tư Xây dựng Bất động sản Lanmak</td>
                                </tr>
                                <tr>
                                    <th>Hạng mục</th>
                                    <td>:{projectDetail.category}</td>
                                </tr>
                                <tr>
                                    <th>Địa điểm</th>
                                    <td>:{projectDetail.address}</td>
                                </tr>
                                <tr>
                                    <th>Loại công trình</th>
                                    <td>:{projectDetail.type}</td>
                                </tr>
                                <tr>
                                    <th>Cấp công trình</th>
                                    <td>:{projectDetail.level}</td>
                                </tr>
                                <tr>
                                    <th>Thời gian thực hiện</th>
                                    <td>:{projectDetail.time}</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </BsModal>
        </Fragment>

    );


};
const transformArr = (arr, number) => {
    let listProject;
    let newArr = [];
    for (let i = 0; i <= (arr.length - 1) / number; i++) {
        listProject = arr.slice((i * number), ((i + 1) * number));
        newArr.push(listProject);
    }
    return newArr;
};
const TabProjects = ({onToggle}) => {
    const projects = useSelector(state => state.homePage.projects);
    const dispatch = useDispatch();
    const onHandle = (value, id) => {
        onToggle(value, id);
    };
    useEffect(() => {
        dispatch(getAllProjectRequest());
    }, []);

    var tab = [
        {
            label: "TẤT CẢ",
            main: () => <div>
                <BsSlide {...slideSettings}>
                    {
                        transformArr(projects, 6).length > 0 ?
                            transformArr(projects, 6).map((item, index) => {

                                return <div className="item" key={index}>
                                    <div className="bs-row row-xs-5 row-sm-10 row-md-15">
                                        {item.map((project, index) => {
                                            return <div className="bs-col xs-50-5 sm-50-10 md-33-15 lg-33-15"
                                                        key={index}>
                                                <div className="item-image"
                                                     onClick={() => onHandle(true, project.id)}>
                                                    <img src={`images/${project.image}`} alt=""/>
                                                    <div className="item-text">
                                                        <p className="title">{project.name}</p>
                                                        <p className="desc">{project.desc}</p>
                                                        <Link to="#" className="btn-read">
                                                            +
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                        })}


                                    </div>
                                </div>
                            }) : <div className="item">
                                Chưa có dữ liệu
                            </div>
                    }
                </BsSlide>


            </div>
        },
        {
            label: "THƯƠNG MẠI",
            main: () => <div>
                <BsSlide {...slideSettings}>
                    {
                        transformArr(projects.filter((project) => {
                            return project.desc === "Thương mại"
                        }), 6).length > 0 ?
                            transformArr(projects.filter((project) => {
                                return project.desc === "Thương mại"
                            }), 6).map((item, index) => {

                                return <div className="item" key={index}>
                                    <div className="bs-row row-xs-5 row-sm-10 row-md-15">
                                        {item.map((project, index) => {
                                            return <div className="bs-col xs-50-5 sm-50-10 md-33-15 lg-33-15"
                                                        key={index}>
                                                <div className="item-image"  onClick={() => onHandle(true, project.id)}>
                                                    <img src={`images/${project.image}`} alt=""/>
                                                    <div className="item-text">
                                                        <p className="title">{project.name}</p>
                                                        <p className="desc">{project.desc}</p>
                                                        <Link to="#" className="btn-read">
                                                            +
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            }) : <div className="item">
                                Chưa có dữ liệu
                            </div>
                    }
                </BsSlide>
            </div>
        },
        {
            label: "GIÁO DỤC",
            main: () => <div>
                <BsSlide {...slideSettings}>
                    {
                        transformArr(projects.filter((project) => {
                            return project.desc === "Giáo dục"
                        }), 6).length > 0 ?
                            transformArr(projects.filter((project) => {
                                return project.desc === "Giáo dục"
                            }), 6).map((item, index) => {

                                return <div className="item" key={index}>
                                    <div className="bs-row row-xs-5 row-sm-10 row-md-15">
                                        {item.map((project, index) => {
                                            return <div className="bs-col xs-50-5 sm-50-10 md-33-15 lg-33-15"
                                                        key={index}>
                                                <div className="item-image"  onClick={() => onHandle(true, project.id)}>
                                                    <img src={`images/${project.image}`} alt=""/>
                                                    <div className="item-text">
                                                        <p className="title">{project.name}</p>
                                                        <p className="desc">{project.desc}</p>
                                                        <Link to="#" className="btn-read">
                                                            +
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            }) : <div className="item">
                                Chưa có dữ liệu
                            </div>
                    }
                </BsSlide>

            </div>
        },
        {
            label: "BỆNH VIỆN",
            main: () => <div>
                <BsSlide {...slideSettings}>
                    {
                        transformArr(projects.filter((project) => {
                            return project.desc === "Bệnh viện"
                        }), 6).length > 0 ?
                            transformArr(projects.filter((project) => {
                                return project.desc === "Bệnh viện"
                            }), 6).map((item, index) => {

                                return <div className="item" key={index}>
                                    <div className="bs-row row-xs-5 row-sm-10 row-md-15">
                                        {item.map((project, index) => {
                                            return <div className="bs-col xs-50-5 sm-50-10 md-33-15 lg-33-15"
                                                        key={index}>
                                                <div className="item-image"  onClick={() => onHandle(true, project.id)}>
                                                    <img src={`images/${project.image}`} alt=""/>
                                                    <div className="item-text">
                                                        <p className="title">{project.name}</p>
                                                        <p className="desc">{project.desc}</p>
                                                        <Link to="#" className="btn-read">
                                                            +
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            }) : <div className="item">
                                Chưa có dữ liệu
                            </div>
                    }
                </BsSlide>

            </div>
        },
        {
            label: "THƯỜNG TRÚ",
            main: () => <div>
                <BsSlide {...slideSettings}>
                    {
                        transformArr(projects.filter((project) => {
                            return project.desc === "Thường trú"
                        }), 6).length > 0 ?
                            transformArr(projects.filter((project) => {
                                return project.desc === "Thường trú"
                            }), 6).map((item, index) => {

                                return <div className="item" key={index}>
                                    <div className="bs-row row-xs-5 row-sm-10 row-md-15">
                                        {item.map((project, index) => {
                                            return <div className="bs-col xs-50-5 sm-50-10 md-33-15 lg-33-15"
                                                        key={index}>
                                                <div className="item-image"  onClick={() => onHandle(true, project.id)}>
                                                    <img src={`images/${project.image}`} alt=""/>
                                                    <div className="item-text">
                                                        <p className="title">{project.name}</p>
                                                        <p className="desc">{project.desc}</p>
                                                        <Link to="#" className="btn-read">
                                                            +
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            }) : <div className="item">
                                Chưa có dữ liệu
                            </div>
                    }
                </BsSlide>

            </div>

        },
        {
            label: "VĂN PHÒNG",
            main: () => <div>
                <BsSlide {...slideSettings}>
                    {
                        transformArr(projects.filter((project) => {
                            return project.desc === "Văn phòng"
                        }), 6).length > 0 ?
                            transformArr(projects.filter((project) => {
                                return project.desc === "Văn phòng"
                            }), 6).map((item, index) => {

                                return <div className="item" key={index}>
                                    <div className="bs-row row-xs-5 row-sm-10 row-md-15">
                                        {item.map((project, index) => {
                                            return <div className="bs-col xs-50-5 sm-50-10 md-33-15 lg-33-15"
                                                        key={index}>
                                                <div className="item-image"  onClick={() => onHandle(true, project.id)}>
                                                    <img src={`images/${project.image}`} alt=""/>
                                                    <div className="item-text">
                                                        <p className="title">{project.name}</p>
                                                        <p className="desc">{project.desc}</p>
                                                        <Link to="#" className="btn-read">
                                                            +
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            }) : <div className="item">
                                Chưa có dữ liệu
                            </div>
                    }
                </BsSlide>

            </div>


        },
        {
            label: "TÁI THIẾT",
            main: () => <div>
                <BsSlide {...slideSettings}>
                    {
                        transformArr(projects.filter((project) => {
                            return project.desc === "Tái thiết"
                        }), 6).length > 0 ?
                            transformArr(projects.filter((project) => {
                                return project.desc === "Tái thiết"
                            }), 6).map((item, index) => {

                                return <div className="item" key={index}>
                                    <div className="bs-row row-xs-5 row-sm-10 row-md-15">
                                        {item.map((project, index) => {
                                            return <div className="bs-col xs-50-5 sm-50-10 md-33-15 lg-33-15"
                                                        key={index}>
                                                <div className="item-image"  onClick={() => onHandle(true, project.id)}>
                                                    <img src={`images/${project.image}`} alt=""/>
                                                    <div className="item-text">
                                                        <p className="title">{project.name}</p>
                                                        <p className="desc">{project.desc}</p>
                                                        <Link to="#" className="btn-read">
                                                            +
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            }) : <div className="item">
                                Chưa có dữ liệu
                            </div>
                    }
                </BsSlide>

            </div>
        }
    ];

    return (
        <BsTab {...tab} />
    );
};

var slideSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: "0",
    dots: false,
    fade: false,
    autoplay: false,
    infinite: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    swipe: false,
    nextArrowSetting: {
        label: <img src="images/arrow-right.png" alt=""/>,
        className: "list__control next__btn"
    },
    prevArrowSetting: {
        label: <img src="images/arrow-left.png" alt=""/>,
        className: "list__control prev__btn"
    },
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


export default SectionProjects;
