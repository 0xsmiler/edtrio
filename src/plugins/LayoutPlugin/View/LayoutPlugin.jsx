import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./../styles.scss";

import PluginResolver from "edtrio/common/Components/PluginResolver";

const LayoutPlugin = props => {
    const { id, childs, options } = props;

    return (
        <div className={styles.layout_wrapper}>
            <div className={styles.placeholder}>
                <PluginResolver mode="view" plugin={childs[0].name}>
                    {First => {
                        return First ? (
                            <First
                                id={childs[0].id}
                                options={options}
                                isEditable={false}
                            />
                        ) : (
                            <p>Leer</p>
                        );
                    }}
                </PluginResolver>
            </div>
            <div className={styles.placeholder}>
                <PluginResolver mode="view" plugin={childs[1].name}>
                    {Second => {
                        return Second ? (
                            <Second
                                id={childs[1].id}
                                options={options}
                                isEditable={false}
                            />
                        ) : (
                            <p>Leer</p>
                        );
                    }}
                </PluginResolver>
            </div>
        </div>
    );
};

LayoutPlugin.propTypes = {
    options: PropTypes.shape({
        allowChildRearrangement: PropTypes.bool
    }),
    childs: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired
};

export default LayoutPlugin;